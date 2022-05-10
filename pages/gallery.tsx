import Container from 'src/components/layout/Container/Container';
import Gallery from 'src/components/Gallery/Gallery';
import PageHeading from 'src/components/shared/PageHeading';

export default function gallery() {
  return (
    <Container>
      <PageHeading
        title="Gallery"
        secondaryText="Feel free to take a look at some memory items I've made"
      />

      <Gallery />
    </Container>
  );
}
