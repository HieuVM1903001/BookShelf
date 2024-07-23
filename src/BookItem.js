import { Card, Select, Typography } from "antd";
import { useState } from "react";

export const BookItem = ({ bookData, onShelfSelect }) => {
  const [current, setCurrent] = useState(bookData.state);

  const authorsList = () => {
    return bookData?.book?.authors?.map((author, index) => (
      <div key={index}>{author}</div>
    ));
  };

  const items = [
    {
      value: "move",
      label: "Move to...",
      disabled: true,
    },
    {
      value: "read",
      label: "Read",
    },
    {
      value: "wantToRead",
      label: "Want to Read",
    },
    {
      value: "currentlyReading",
      label: "Currently Reading",
    },
    {
      value: "none",
      label: "None",
    },
  ];

  return (
    <Card
      style={{
        width: 250,
        borderRadius: 8,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      cover={
        <div style={{ position: "relative", height: 300, overflow: "hidden" }}>
          <img
            alt={bookData?.book?.title}
            src={bookData?.book?.imageLinks?.smallThumbnail}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 8,
              border: "1px solid #ddd",
            }}
          />
        </div>
      }
      actions={[
        <Select
          key="category-select"
          style={{ width: 150 }}
          options={items}
          onChange={(value) => {
            onShelfSelect(value, bookData);
            setCurrent(value);
          }}
          defaultValue={current}
          value={current}
        />,
      ]}
    >
      <Card.Meta
        title={
          <Typography level={4} style={{ margin: 0 }}>
            {bookData?.book?.title}
          </Typography>
        }
        description={<div>{authorsList()}</div>}
      />
    </Card>
  );
};
