import { Fragment } from "react";
import Badge from "../Badge/Badge";
import Divider from "../Divider/Divider";
import Entry from "../Entry/Entry";
import Tab from "../Tab/Tab";
import Tabs from "../Tabs/Tabs";
import "./EntriesSection.css";

export default function EntriesSection({ entries }) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <Fragment key={entries.id}>
        <div className="entries-section__entries">
          {entries.map(({ id, date, motto, notes }, index) => {
            return (
              <p>
                <Entry id={id} date={date} motto={motto} notes={notes} />
                {index < entries.length - 1 && <Divider />}
              </p>
            );
          })}
        </div>
      </Fragment>
    </section>
  );
}
