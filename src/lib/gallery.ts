export interface GalleryItem {
  id: string;
  title: string;
  category: "All" | "Education" | "Health" | "Crisis Response" | "Youth" | "Community" | "Events";
  type: "photo" | "video";
  src: string;
  poster?: string;
  alt: string;
}

export const galleryCategories = [
  "All",
  "Education",
  "Health",
  "Crisis Response",
  "Youth",
  "Community",
  "Events",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Reading hour at the inclusive school",
    category: "Education",
    type: "photo",
    src: "/images/gallery/education-1.jpg",
    alt: "Children reading together in a bright classroom",
  },
  {
    id: "g2",
    title: "Mobile clinic in the highlands",
    category: "Health",
    type: "photo",
    src: "/images/gallery/health-1.jpg",
    alt: "Community health worker treating a patient outdoors",
  },
  {
    id: "g3",
    title: "First responders at the flood site",
    category: "Crisis Response",
    type: "photo",
    src: "/images/gallery/crisis-1.jpg",
    alt: "Aid workers distributing supplies after a flood",
  },
  {
    id: "g4",
    title: "ICT bootcamp graduation",
    category: "Youth",
    type: "photo",
    src: "/images/gallery/youth-1.jpg",
    alt: "Young people celebrating a graduation",
  },
  {
    id: "g5",
    title: "Women's cooperative launch day",
    category: "Community",
    type: "photo",
    src: "/images/gallery/community-1.jpg",
    alt: "Women cutting a ribbon at a cooperative opening",
  },
  {
    id: "g6",
    title: "Annual Impact Gala highlights",
    category: "Events",
    type: "photo",
    src: "/images/gallery/events-1.jpg",
    alt: "Gala stage with speakers",
  },
  {
    id: "g7",
    title: "Inside our youth tech lab",
    category: "Youth",
    type: "photo",
    src: "/images/gallery/youth-2.jpg",
    alt: "Young students at computers",
  },
  {
    id: "g8",
    title: "Distribution day in the camp",
    category: "Crisis Response",
    type: "photo",
    src: "/images/gallery/crisis-2.jpg",
    alt: "Family receiving relief supplies",
  },
  {
    id: "g9",
    title: "Inclusive playtime",
    category: "Education",
    type: "photo",
    src: "/images/gallery/education-2.jpg",
    alt: "Children playing together inclusively",
  },
  {
    id: "g10",
    title: "Maternal health visit",
    category: "Health",
    type: "photo",
    src: "/images/gallery/health-2.jpg",
    alt: "Health worker visiting mother and newborn",
  },
  {
    id: "g11",
    title: "Volunteer Saturday in Toronto",
    category: "Events",
    type: "photo",
    src: "/images/gallery/events-2.jpg",
    alt: "Volunteers packing kits",
  },
  {
    id: "g12",
    title: "Community gathering",
    category: "Community",
    type: "photo",
    src: "/images/gallery/community-2.jpg",
    alt: "Community members in conversation",
  },
];
