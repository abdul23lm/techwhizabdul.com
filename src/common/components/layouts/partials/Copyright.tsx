const Copyright = () => {
  return (
    <div className='flex items-center gap-1 text-sm py-1 px-3 text-neutral-600 dark:text-neutral-600 font-sora'>
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <span>-</span>
      <a href='/' target='_blank' rel='noopener noreferrer'>
        <span className='hover:dark:text-neutral-400 cursor-pointer'>
          techwhizabdul.com
        </span>
      </a>
    </div>
  );
};

export default Copyright;
