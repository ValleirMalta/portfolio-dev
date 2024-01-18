import Head from 'next/head';

interface Infor {
  title: string;
  description: string;
}

const HeadInfor: React.FC<Infor> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadInfor;
