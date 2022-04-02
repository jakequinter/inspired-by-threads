import Container from 'src/components/layout/Container/Container';
import Gallery from 'src/components/Gallery';
import PageHeading from 'src/components/shared/PageHeading';

export default function gallery() {
  return (
    <Container>
      <PageHeading
        title="Gallery"
        secondaryText="View past memorable items for inspiration"
      />

      <Gallery />
    </Container>
  );
}
