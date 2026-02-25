// Dummy data for local development and testing.
// Mirrors the shapes expected by App (MainPage), MainPageEvent, EventPage, and Line_Graph.
//
// Event list shape   → { id: number, name: string }[]
// Event series shape → { label: string, color: string, data: { time: string, value: number }[] }[]

// ── Event list ────────────────────────────────────────────────────────────────
// Consumed by: App (MainPage) fetchEvents
export const dummyEvents = [
  { id: 1, name: 'Will it rain tomorrow?' },
  { id: 2, name: 'Stock market up by EOD?' },
  { id: 3, name: 'Team Alpha wins the championship?' },
];

// ── Per-event series data ─────────────────────────────────────────────────────
// Consumed by: MainPageEvent fetchEvents, EventPage fetchEvents, Line_Graph (via eventData prop)
// Each entry is keyed by event id and holds an array of series for the line graph.
export const dummyEventData = {
  1: [
    {
      label: 'Yes',
      color: 'rgb(54, 162, 235)',
      data: [
        { time: '9:00', value: 50 },
        { time: '10:00', value: 55 },
        { time: '11:00', value: 60 },
        { time: '12:00', value: 58 },
        { time: '13:00', value: 65 },
      ],
    },
    {
      label: 'No',
      color: 'rgb(255, 99, 132)',
      data: [
        { time: '9:00', value: 50 },
        { time: '10:00', value: 45 },
        { time: '11:00', value: 40 },
        { time: '12:00', value: 42 },
        { time: '13:00', value: 35 },
      ],
    },
  ],
  2: [
    {
      label: 'Yes',
      color: 'rgb(75, 192, 192)',
      data: [
        { time: '9:00', value: 40 },
        { time: '10:00', value: 45 },
        { time: '11:00', value: 50 },
        { time: '12:00', value: 47 },
        { time: '13:00', value: 53 },
      ],
    },
    {
      label: 'No',
      color: 'rgb(255, 159, 64)',
      data: [
        { time: '9:00', value: 60 },
        { time: '10:00', value: 55 },
        { time: '11:00', value: 50 },
        { time: '12:00', value: 53 },
        { time: '13:00', value: 47 },
      ],
    },
  ],
  3: [
    {
      label: 'Yes',
      color: 'rgb(153, 102, 255)',
      data: [
        { time: '9:00', value: 30 },
        { time: '10:00', value: 35 },
        { time: '11:00', value: 45 },
        { time: '12:00', value: 50 },
        { time: '13:00', value: 70 },
      ],
    },
    {
      label: 'No',
      color: 'rgb(201, 203, 207)',
      data: [
        { time: '9:00', value: 70 },
        { time: '10:00', value: 65 },
        { time: '11:00', value: 55 },
        { time: '12:00', value: 50 },
        { time: '13:00', value: 30 },
      ],
    },
  ],
};

// ── Fetch helpers ─────────────────────────────────────────────────────────────
// These simulate async API calls so they can drop in directly where the real
// fetch() calls will eventually live.

/** Returns the full list of events (used by App / MainPage). */
export async function getEvents() {
  return dummyEvents;
}

/**
 * Returns series data for a single event (used by EventPage and MainPageEvent).
 * Returns null when the eventId is not found, matching typical API 404 behaviour.
 *
 * @param {number} eventId
 * @returns {Promise<Array|null>}
 */
export async function fetchEventById(eventId) {
  return dummyEventData[eventId] ?? null;
}
