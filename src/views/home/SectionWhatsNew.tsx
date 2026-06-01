import * as EventInterface from "@/interface/event";
import DisplaySection from "@/views/home/DisplaySection";

const SectionWhatsNew = ({events}: {events: EventInterface.Event[]}) => {
  // Filter for the 3 most recent events. Copy before sorting so the `events`
  // prop isn't mutated (.toSorted isn't in this project's TS lib target).
  const filteredEvents = [...events]
    .sort((a: EventInterface.Event, b: EventInterface.Event) => b.createdDateTime - a.createdDateTime)
    .slice(0, 3);
  return (
    <DisplaySection events={filteredEvents} sectionTitle="What's New"/>
  )
};

export default SectionWhatsNew;