import Chip from "./Chip";

const Chips = () => {
  const list = [
    "All",
    "Songs",
    "Cricket",
    "Politics",
    "Entertainment",
    "Sports",
    "Podcasts",
    "Technology",
    "Coding",
    "History",
    "Science",
    "Devotion"
  ];

  return (
    <section className="flex justify-start w-full mx-auto">
      {list.map((name) => {
        return <Chip name={name} key={name} />;
      })}
    </section>
  );
};

export default Chips;
