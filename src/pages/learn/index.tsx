import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { LEARN_CONTENTS } from '@/common/constant/learn';
import LearnModule from '@/modules/learn';

const PAGE_TITLE = 'Learn';
const PAGE_DESCRIPTION = `Beyond a course, these are my personal learning notes. If you're interested, let's embark on a learning journey together.`;

const LearnPage: NextPage = () => {
  const filteredContents =
    LEARN_CONTENTS.filter((content) => content.is_show) || [];

  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Abdul Latif Munjiat`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <LearnModule contents={filteredContents} />
      </Container>
    </>
  );
};

export default LearnPage;
