// src/components/Clients/index.tsx
import SingleClient from "@/components/Clients/SingleClient";
import { clientsData } from "./ClientsData";

const Clients = () => {
  return (
    <section id="clients" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {clientsData.map((client) => (
            <SingleClient key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
