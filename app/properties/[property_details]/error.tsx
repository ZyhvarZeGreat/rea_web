'use client'
import ErrorMessage from "@/components/common/ErrorMessage/ErrorMessage";

const  ErrorBoundary = ({error}: { error: Error }) => {
  return (
    <ErrorMessage/>
  );
};
export default ErrorBoundary