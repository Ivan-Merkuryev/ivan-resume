import { Contacts } from "../components/Contacts";
import { Header2 } from "../components/ui/Header2";

export function ContactsWidget() {
  return (
    <section id="contacts">
      <Header2 h="Контакты" />
      <Contacts />
    </section>
  );
}
