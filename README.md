## gyangrove

### Objective:
- To build a website that shows upcoming and recommended events. The website must be responsive to work in both desktop and mobile screen size. It should fetch events from the provided APIs.

---

### Demo videos for reference:
- Desktop video
    - https://drive.google.com/file/d/1dkvCnBiWE-5MuciHRvhymXkvEsfB7aim/view
- Mobile video
    - https://drive.google.com/file/d/1ejqJp9bJ4mr4vDl1hBdIXUF4ig7SIQo8/view

---

### Fetching Events:
- As shown in the images above, there are two types of events. Recommended shows and upcoming events. 
- Recommended shows:
    - There are only 8 recommended shows which will infinitely scroll horizontally. You can fetch the recommended events by calling the below API. The response also has img_url which should be used as the thumbnail image for the event.
    - https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco

---

### Upcoming events:
- There are several upcoming events which scroll vertically as shown in the image. You can fetch the upcoming events by calling this API. 
    - https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming

---

### IMPORTANT: 
- Keep in mind that the upcoming events API has several pages, you need to fetch a new page of events only when the has scrolled to the end of the page. You can show a small loading spinner while you are fetching the next page from the backend API.
- Example event schema:
{
    "eventName": "Winter Wonderland Fair", // Name of the event
    "cityName": "West Douglas", // Location of the event
    "date": "2024-03-24T00:00:00.000Z", // Date and time
    "weather": "Snowy 26C", // Weather on that date at the event location
    "distanceKm": "4264.1226847222415", // Distance of the event from source
    "img_url": "https://drive.google.com/file/d/1lS1XAo47YvNSoFp1NE5rmhTSQ8qNBWEh/view" // URL to download the thumbnail image for the event
}

---

### Font and Color:
- Font - Inter
- Font color (Heading) - #1E2022, Font color (Subtitle) - #989090
- Background color - #ffffff
- Logo color - #CF2D2D
- Stroke/border color - #B0BABF
- Banner Image: Download the banner image here
    - https://drive.google.com/file/d/1hFKPSETzU0K0U9pgcpcvoVk0XCEJxQ8k/view

---

### Live Link
- https://gyangrove-assignment.netlify.app/
