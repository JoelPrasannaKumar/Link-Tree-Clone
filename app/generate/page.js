import { Suspense } from 'react';
import Generate from './generatecontent';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateContent />
    </Suspense>
  );
}
