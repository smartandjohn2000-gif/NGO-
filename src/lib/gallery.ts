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
    src: "/images/programs/disability-inclusion.jpg",
    alt: "Children learning together in a bright classroom",
  },
  {
    id: "g2",
    title: "Mobile clinic in the highlands",
    category: "Health",
    type: "photo",
    src: "/images/programs/health-education.jpg",
    alt: "Community health worker examining a baby outdoors",
  },
  {
    id: "g3",
    title: "Distribution day at the relief site",
    category: "Crisis Response",
    type: "photo",
    src: "/images/programs/crisis-response.jpg",
    alt: "Aid workers distributing supplies at a relief site",
  },
  {
    id: "g4",
    title: "Inside our youth tech lab",
    category: "Youth",
    type: "photo",
    src: "/images/programs/youth-empowerment.jpg",
    alt: "Young people learning at a community technology center",
  },
  {
    id: "g5",
    title: "Women's cooperative",
    category: "Community",
    type: "photo",
    src: "/images/programs/gender-equality.jpg",
    alt: "Women working together at a community cooperative",
  },
  {
    id: "g6",
    title: "Hero of the program",
    category: "Events",
    type: "photo",
    src: "/images/hero.jpg",
    alt: "Program celebration with diverse community members",
  },
  {
    id: "g7",
    title: "Child-friendly space",
    category: "Education",
    type: "photo",
    src: "/images/programs/child-protection.jpg",
    alt: "Children at a child-friendly space",
  },
  {
    id: "g8",
    title: "Community gathering",
    category: "Community",
    type: "photo",
    src: "/images/who-we-are.jpg",
    alt: "Community members in conversation",
  },
  {
    id: "g9",
    title: "Front-line health worker",
    category: "Health",
    type: "photo",
    src: "/images/programs/health-education.jpg",
    alt: "Health worker visiting mother and newborn",
  },
  {
    id: "g10",
    title: "Skills cooperative",
    category: "Community",
    type: "photo",
    src: "/images/programs/gender-equality.jpg",
    alt: "Women's skills cooperative",
  },
  {
    id: "g11",
    title: "Crisis response in the field",
    category: "Crisis Response",
    type: "photo",
    src: "/images/programs/crisis-response.jpg",
    alt: "Crisis response team at a distribution point",
  },
  {
    id: "g12",
    title: "Youth bootcamp graduation",
    category: "Youth",
    type: "photo",
    src: "/images/programs/youth-empowerment.jpg",
    alt: "Bootcamp graduation ceremony",
  },
];
