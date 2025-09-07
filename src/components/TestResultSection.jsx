function TestResultSection() {
  return (
    <section className="from md:max flex flex-col items-center justify-center gap-y-2 rounded-b-4xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue px-12 py-8 text-light-lavender sm:w-1/2 sm:justify-between sm:rounded-4xl sm:py-6 md:max-w-96">
      <h1>Your Result</h1>
      <div className="my-2 flex flex-col items-center gap-y-2 rounded-full bg-gradient-to-b from-violet-blue to-persian-blue px-8 py-4 sm:px-10 sm:py-6 md:px-12 md:py-8">
        <span className="text-4xl font-bold text-pale-blue">76</span>
        <span className="text-xs">of 100</span>
      </div>
      <h3 className="text-xl text-pale-blue">Great</h3>
      <p className="text-center">
        You Scored higher than 65% of the people who have taken these tests
      </p>
    </section>
  );
}

export default TestResultSection;
