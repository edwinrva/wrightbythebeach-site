"use client";

import { Lightbox, LightboxThumb } from "./Lightbox";
import { Reveal } from "./Reveal";

type Group = { title: string; photos: string[] };

export function GalleryGrid({ groups }: { groups: Group[] }) {
  const allPhotos = groups.flatMap((group) => group.photos.map((label) => ({ label })));

  const groupsWithStartIndex = groups.reduce<{ group: Group; startIndex: number }[]>(
    (acc, group) => {
      const previous = acc[acc.length - 1];
      const startIndex = previous ? previous.startIndex + previous.group.photos.length : 0;
      return [...acc, { group, startIndex }];
    },
    []
  );

  return (
    <Lightbox photos={allPhotos}>
      {(open) => (
        <div className="space-y-14">
          {groupsWithStartIndex.map(({ group, startIndex }) => (
            <Reveal key={group.title}>
              <h2 className="font-display text-2xl text-ocean-900">{group.title}</h2>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {group.photos.map((photo, i) => (
                  <LightboxThumb
                    key={photo}
                    label={photo}
                    className="aspect-[4/3] rounded-xl"
                    onClick={() => open(startIndex + i)}
                  />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </Lightbox>
  );
}
