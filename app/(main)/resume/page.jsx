import { getResume } from "@/actions/resume";
   import ResumeBuilder from '@/app/(main)/resume/_components/resume-builder';


export default async function ResumePage() {
  const resume = await getResume();

  return (
    <div className="container mx-auto py-6">
      <ResumeBuilder initialContent={resume?.content} />
    </div>
  );
}