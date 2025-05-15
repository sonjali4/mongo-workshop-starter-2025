/**
 * Gets the photo URL of a contact.
 * If the contact has a photoUrl, it will be returned.
 * Otherwise, a default image URL will be returned.
 *
 * @param {string} photoUrl the contact to check
 * @returns {string} the url of the contact's photo
 */
export function getPhotoUrl(photoUrl) {
  // console.log("getPhotoUrl", photoUrl);
  if (photoUrl) {
    if (photoUrl.startsWith("http")) return photoUrl;
    return import.meta.env.VITE_IMAGE_BASE_URL + photoUrl;
  }
  return "https://th.bing.com/th/id/OIP.PoS7waY4-VeqgNuBSxVUogAAAA?rs=1&pid=ImgDetMain";
}

// All valid avatar / contact images.
// In a real app, we might fetch this list from a server.
export const AVATAR_IMAGES = [
  "/images/avatars/avatar-001.jpeg",
  "/images/avatars/avatar-002.jpeg",
  "/images/avatars/avatar-003.png",
  "/images/avatars/avatar-004.webp",
  "/images/avatars/avatar-005.png",
  "/images/avatars/avatar-006.jpg",
  "/images/avatars/avatar-007.png",
  "/images/avatars/avatar-008.jpeg",
  "/images/avatars/avatar-009.png",
  "/images/avatars/avatar-010.png",
  "/images/avatars/avatar-011.png",
  "/images/avatars/avatar-012.png",
  "/images/avatars/avatar-013.png",
  "/images/avatars/avatar-014.png",
  "/images/avatars/avatar-015.png"
];
