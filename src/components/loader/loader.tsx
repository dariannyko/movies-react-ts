import ContentLoader from 'react-content-loader';

type Props = {};

const Loader = (props: Props) => {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 200 300"
      backgroundColor="#242424"
      foregroundColor="#2e2d2d"
      {...props}
    >
      <rect x="0" y="0" rx="5" ry="5" width="200" height="300" />
    </ContentLoader>
  );
};

export { Loader };
