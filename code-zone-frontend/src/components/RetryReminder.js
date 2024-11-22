const RetryReminder = ({ title, description, lastTested }) => {
  const isOldTest = new Date(lastTested) < new Date(new Date() - 3 * 24 * 60 * 60 * 1000); // More than 3 days ago

  return (
    <div className={`retry-reminder-box ${isOldTest ? 'old-test' : ''}`}>
      <h3 className="retry-reminder-title">{title}</h3>
      <p className="retry-reminder-description">{description}</p>
      <p className={`retry-reminder-last-tested ${isOldTest ? 'old-test' : ''}`}>
        Last tested: {lastTested}
      </p>
    </div>
  );
};

export default RetryReminder;
