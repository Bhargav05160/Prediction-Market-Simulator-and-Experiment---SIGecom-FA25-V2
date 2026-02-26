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
  { id: 4, name: 'New tech product released this year?' },
  { id: 5, name: 'Will inflation drop next quarter?' },
  { id: 6, name: 'Mars mission launches by 2026?' },
  { id: 7, name: 'Team Beta makes the playoffs?' },
  { id: 8, name: 'New AI model released this month?' },
  { id: 9, name: 'Bitcoin above $100k by year end?' },
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
  4: [
    {
      label: 'Yes',
      color: 'rgb(242, 255, 102)',
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
      color: 'rgb(206, 201, 207)',
      data: [
        { time: '9:00', value: 70 },
        { time: '10:00', value: 65 },
        { time: '11:00', value: 55 },
        { time: '12:00', value: 50 },
        { time: '13:00', value: 30 },
      ],
    },
  ],
  5: [
    {
      label: 'Yes',
      color: 'rgb(54, 235, 162)',
      data: [
        { time: '9:00', value: 45 },
        { time: '10:00', value: 42 },
        { time: '11:00', value: 38 },
        { time: '12:00', value: 35 },
        { time: '13:00', value: 30 },
      ],
    },
    {
      label: 'No',
      color: 'rgb(235, 54, 162)',
      data: [
        { time: '9:00', value: 55 },
        { time: '10:00', value: 58 },
        { time: '11:00', value: 62 },
        { time: '12:00', value: 65 },
        { time: '13:00', value: 70 },
      ],
    },
  ],
  6: [
    {
      label: 'Yes',
      color: 'rgb(255, 140, 0)',
      data: [
        { time: '9:00', value: 20 },
        { time: '10:00', value: 22 },
        { time: '11:00', value: 25 },
        { time: '12:00', value: 28 },
        { time: '13:00', value: 32 },
      ],
    },
    {
      label: 'No',
      color: 'rgb(100, 149, 237)',
      data: [
        { time: '9:00', value: 80 },
        { time: '10:00', value: 78 },
        { time: '11:00', value: 75 },
        { time: '12:00', value: 72 },
        { time: '13:00', value: 68 },
      ],
    },
  ],
  7: [
    {
      label: 'Yes',
      color: 'rgb(255, 69, 0)',
      data: [
        { time: '9:00', value: 55 },
        { time: '10:00', value: 60 },
        { time: '11:00', value: 58 },
        { time: '12:00', value: 63 },
        { time: '13:00', value: 68 },
      ],
    },
    {
      label: 'No',
      color: 'rgb(144, 238, 144)',
      data: [
        { time: '9:00', value: 45 },
        { time: '10:00', value: 40 },
        { time: '11:00', value: 42 },
        { time: '12:00', value: 37 },
        { time: '13:00', value: 32 },
      ],
    },
  ],
  8: [
    {
      label: 'Yes',
      color: 'rgb(186, 85, 211)',
      data: [
        { time: '9:00', value: 60 },
        { time: '10:00', value: 65 },
        { time: '11:00', value: 72 },
        { time: '12:00', value: 78 },
        { time: '13:00', value: 85 },
      ],
    },
    {
      label: 'No',
      color: 'rgb(211, 185, 85)',
      data: [
        { time: '9:00', value: 40 },
        { time: '10:00', value: 35 },
        { time: '11:00', value: 28 },
        { time: '12:00', value: 22 },
        { time: '13:00', value: 15 },
      ],
    },
  ],
  9: [
    {
      label: 'Yes',
      color: 'rgb(255, 215, 0)',
      data: [
        { time: '9:00', value: 35 },
        { time: '10:00', value: 40 },
        { time: '11:00', value: 50 },
        { time: '12:00', value: 60 },
        { time: '13:00', value: 75 },
      ],
    },
    {
      label: 'No',
      color: 'rgb(169, 169, 169)',
      data: [
        { time: '9:00', value: 65 },
        { time: '10:00', value: 60 },
        { time: '11:00', value: 50 },
        { time: '12:00', value: 40 },
        { time: '13:00', value: 25 },
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
