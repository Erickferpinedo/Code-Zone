export const truncateText = (text, maxLength) => {
    if (!text) return "N/A";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  