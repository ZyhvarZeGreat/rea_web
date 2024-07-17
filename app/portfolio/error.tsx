'use client'
import ErrorMessage from "@/components/common/ErrorMessage/ErrorMessage";

const  ErrorBoundary = ({error,reset}: { error: Error,reset:()=> void }) => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <ErrorMessage reset={reset} message={error.message}/>
    </div>
  );
};
export default ErrorBoundary