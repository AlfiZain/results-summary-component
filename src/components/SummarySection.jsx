import SummaryList from './SummaryList';
import data from '../data/data.json';

function SummarySection() {
  return (
    <section className="flex flex-col gap-y-4 p-6 sm:w-1/2">
      <h2 className="font-semibold text-dark-gray-blue">Summary</h2>
      <SummaryList summaryData={data} />
      <button className="mt-2 cursor-pointer rounded-full bg-dark-gray-blue p-2 text-white transition duration-300 hover:bg-light-royal-blue">
        Continue
      </button>
    </section>
  );
}

export default SummarySection;
