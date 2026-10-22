/* Video catalogue. Managed with admin.html. If you edit by hand, keep it valid JSON.
   Fields: id (stable, never change it), title, category, url (kept for compatibility),
   playbackType ("embed" | "external" | "legacy"), embedUrl, externalUrl, thumbnail, keywords, description.
   "legacy" = old record whose playback type has not been configured yet. */
window.VIDEOS = [
  {
    "id": "the-fault-in-our-stars",
    "title": "The Fault In Our Stars",
    "category": "Uncategorized",
    "url": "https://bytedisk.net/v/3f4421",
    "playbackType": "legacy",
    "embedUrl": "",
    "externalUrl": "",
    "thumbnail": "https://i.postimg.cc/wBgQmd11/Yoooo.jpg",
    "keywords": ["The", "The Fault", "The Fault In", "The Fault In Our", "The Fault In Our Stars"],
    "description": ""
  },
  {
    "id": "voicemails-for-isabelle",
    "title": "Voicemails For Isabelle",
    "category": "Uncategorized",
    "url": "https://bytedisk.net/v/52c8ac2c-0829-40eb-a3ed-70a3730a6553",
    "playbackType": "legacy",
    "embedUrl": "",
    "externalUrl": "",
    "thumbnail": "https://i.postimg.cc/3JZR0RPv/0b2f7a84-10c7-47a8-9fd1-54e8b435a7e4.jpg",
    "keywords": ["Voicemails For Isabelle", "Voicemails", "Voicemails For"],
    "description": ""
  },
  {
    "id": "vdohide-test-video",
    "title": "VdoHide Test Video",
    "category": "Test",
    "url": "https://fembed.co/embed/xdlb4iZ_8V-T5",
    "playbackType": "embed",
    "embedUrl": "https://fembed.co/embed/xdlb4iZ_8V-T5",
    "externalUrl": "",
    "thumbnail": "",
    "keywords": ["test", "vdohide", "fembed"],
    "description": "Test upload used to check the built-in player. Delete this record from the admin page when you no longer need it."
  }
];
