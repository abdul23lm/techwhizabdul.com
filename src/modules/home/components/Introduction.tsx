const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2 text-2xl lg:text-3xl font-medium font-sora'>
          <h1>Hi, I&apos;m Abdul</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='flex flex-col lg:flex-row gap-1 lg:gap-10 ml-5 list-disc text-neutral-700 dark:text-neutral-400'>
            <li>Working Remotely</li>
            <li>
              Based in Jakarta, Indonesia <span className='ml-1'>🇮🇩</span>
            </li>
          </ul>
        </div>
      </div>

      <p className='leading-[1.8] md:leading-loose mt-6 text-neutral-800 dark:text-neutral-300'>
        An experienced Software Engineer with 5+ years of expertise,
        specializing in frontend development. I excel in crafting pixel-perfect
        web applications using VueJS, and ReactJS. On the mobile side, I've got
        you covered with expertise in Flutter. Behind the scenes, I wield the
        power of Laravel and ExpressJS for seamless backend development. Let's
        collaborate to deliver efficient, scalable, and visually appealing
        solutions that exceed expectations!
      </p>
    </section>
  );
};

export default Introduction;
