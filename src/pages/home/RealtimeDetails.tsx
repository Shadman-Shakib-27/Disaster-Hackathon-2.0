import Container from "@/components/shared/Container";
import Tabs from "../../pages/home/Tabs";

const RealtimeDetails = () => {
  return (
    <Container>
      <h1 className="text-center mt-8 text-2xl font-bold">
        This is Realtime Details Page.
      </h1>
      <Tabs />
    </Container>
  );
};

export default RealtimeDetails;
