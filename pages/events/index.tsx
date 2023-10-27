import EventList from "@/components/events/event-list"
import EventsSearch from "@/components/events/events-search"
import { getAllEvents } from "@/dummy-data"
import { useRouter } from "next/router"



export default function AllEventsPage() {
  const router = useRouter()
  const events = getAllEvents()


  function findeventsHandler(year: string, month: string){
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)

  }


  return (
    <>
      <EventsSearch onSearch={findeventsHandler}/>
      <EventList items={events}/>
    </>
  )
}
