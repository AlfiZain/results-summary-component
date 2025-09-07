function SummaryItem({ category, score, icon }) {
  const iconColor = [
    {
      category: 'Reaction',
      color: 'text-light-red',
    },
    {
      category: 'Memory',
      color: 'text-orange-yellow',
    },
    {
      category: 'Verbal',
      color: 'text-green-teal',
    },
    {
      category: 'Visual',
      color: 'text-cobalt-blue',
    },
  ];

  const itemColor = iconColor.find((item) => item.category === category);

  return (
    <li className="flex items-center justify-between rounded-lg bg-pale-blue px-4 py-2 font-semibold text-light-lavender sm:gap-x-8">
      <span className={`flex gap-x-2 ${itemColor.color}`}>
        <img src={icon} alt={`icon-${category}`} />
        {category}
      </span>
      <p>
        <span className="mr-2 text-dark-gray-blue">{score}</span>/ 100
      </p>
    </li>
  );
}

export default SummaryItem;
