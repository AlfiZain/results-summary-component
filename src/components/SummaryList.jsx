import SummaryItem from './SummaryItem';

function SummaryList({ summaryData }) {
  return (
    <ul className="flex flex-col gap-y-4">
      {summaryData.map((item, index) => (
        <SummaryItem key={index} {...item} />
      ))}
    </ul>
  );
}

export default SummaryList;
