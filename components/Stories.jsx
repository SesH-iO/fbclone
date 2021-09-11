import StoryCard from './StoryCard';

const stories = [
  {
    name: 'FB Clone',
    src: 'http://links.papareact.com/zof',
    profile: 'https://links.papareact.com/l4v',
  },
  {
    name: 'Elon Musk',
    src: 'http://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    name: 'Jeff Bezoz',
    src: 'http://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f0p',
  },
  {
    name: 'Mark Zuckereberg',
    src: 'http://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf',
  },
  {
    name: 'Bill Gates',
    src: 'http://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy',
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.name}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
