"use client";

function ErrorPage({ error }: { error: Error }) {
  return (
    <div>
      <span>{error.message}</span>
    </div>
  );
}

export default ErrorPage;
