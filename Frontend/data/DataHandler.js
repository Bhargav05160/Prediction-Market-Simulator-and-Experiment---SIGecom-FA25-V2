// DataHandler — single source of truth for event data in the frontend.
//
// data.json is written/replaced by the backend as events are created or updated.
// When data.json is empty ({}) or missing required keys, the module falls back
// to the static dummy data in tests/dummyData.js so the UI always has something
// to render during development.
//
// When a real backend API is available, replace the body of getEvents() and
// getEventById() with fetch() calls to the appropriate endpoints.

import rawData from './data.json';
import { dummyEvents, dummyEventData } from '../../tests/dummyData.js';

// Treat data.json as empty if it has no events array (or the array is empty).
const hasRealData = Array.isArray(rawData.events) && rawData.events.length > 0;

const events   = hasRealData ? rawData.events    : dummyEvents;
const eventData = hasRealData ? rawData.eventData : dummyEventData;

/**
 * Returns the full list of events.
 * Shape: { id: number, name: string }[]
 */
export function getEvents() {
  return events;
}

/**
 * Returns the series data for a single event, or null if not found.
 * Shape: { label: string, color: string, data: { time: string, value: number }[] }[]
 *
 * @param {number|string} eventId
 */
export function getEventById(eventId) {
  return eventData[eventId] ?? null;
}
