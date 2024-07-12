import Container from "@/components/shared/Container";
import Tabs from "../../pages/home/Tabs";
import Charts from "../../pages/home/posts/Charts";

const RealtimeDetails = () => {
  return (
    <Container>
      <Charts />
      <h1 className="text-center mt-8 text-2xl font-bold">
        This is Realtime Details Page.
      </h1>
      <Tabs />
    </Container>
  );
};

export default RealtimeDetails;
