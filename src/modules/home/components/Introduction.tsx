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
            <li>
              Based in Jakarta, Indonesia <span className='ml-1'>🇮🇩</span>
            </li>
            <li>Working Remotely</li>
          </ul>
        </div>
      </div>

      <p className='leading-[1.8] md:leading-loose mt-6 text-neutral-800 dark:text-neutral-300'>
        Experienced software engineer with 5+ years specializing in frontend
        development. Skilled in crafting visually appealing web applications and
        mobile solutions. Proficient in backend development, API creation,
        deployment management, and infrastructure. Open to collaboration for
        building better projects. Let's craft efficient, scalable solutions
        together!
      </p>
    </section>
  );
};

export default Introduction;
