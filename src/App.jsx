import SummarySection from './components/SummarySection';
import TestResultSection from './components/TestResultSection';

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-white font-hanken sm:items-center sm:justify-center sm:p-[5%]">
      <div className="flex flex-col sm:flex-row sm:rounded-4xl sm:shadow-2xl">
        <TestResultSection />
        <SummarySection />
      </div>
    </main>
  );
}

export default App;
