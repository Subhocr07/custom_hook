import React, { useState, useEffect, useRef, useCallback } from "react";

const TOTAL_ITEMS = 100000;
const ITEM_HEIGHT = 50;
const BUFFER = 5; // 👈 extra items for smoothness

export default function App() {
  const [data, setData] = useState([]);
  const [visibleList, setVisibleList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const containerRef = useRef(null);

  // 🔹 Initial data
  useEffect(() => {
    loadMore();
  }, []);

  // 🔹 Simulate API
  const loadMore = async () => {
    if (isFetching) return;

    setIsFetching(true);

    setTimeout(() => {
      setData((prev) => {
        const next = [...prev];
        const start = prev.length;

        for (let i = start; i < start + 50; i++) {
          next.push({ id: i, name: `User ${i}`, email: `user${i}@mail.com` });
        }

        if (next.length >= TOTAL_ITEMS) {
          setHasNextPage(false);
        }

        return next;
      });

      setIsFetching(false);
    }, 500);
  };

  // 🔹 Scroll Handler
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const containerHeight = container.clientHeight;

    const itemsPerView = Math.ceil(containerHeight / ITEM_HEIGHT);

    const newStart = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER);
    const endIndex = Math.min(
      data.length,
      newStart + itemsPerView + BUFFER * 2
    );

    setStartIndex(newStart);
    setVisibleList(data.slice(newStart, endIndex));

    // 🚀 Infinite load trigger
    if (endIndex >= data.length - 1 && hasNextPage && !isFetching) {
      loadMore();
    }
  }, [data, hasNextPage, isFetching]);

  useEffect(() => {
    handleScroll();

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "400px",
        overflowY: "auto",
        border: "1px solid gray",
        position: "relative",
      }}
    >
      <div
        style={{
          height: `${data.length * ITEM_HEIGHT}px`,
          position: "relative",
        }}
      >
        {visibleList.map((item, index) => {
          const actualIndex = startIndex + index;

          return (
            <div
              key={item.id}
              style={{
                position: "absolute",
                top: actualIndex * ITEM_HEIGHT,
                height: ITEM_HEIGHT,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 10px",
                borderBottom: "1px solid #eee",
              }}
            >
              <span>{item.name}</span>
              <span>{item.email}</span>
            </div>
          );
        })}

        {/* 👇 Loader */}
        {isFetching && (
          <div
            style={{
              position: "absolute",
              top: data.length * ITEM_HEIGHT,
              height: ITEM_HEIGHT,
            }}
          >
            Loading more...
          </div>
        )}
      </div>
    </div>
  );
}
