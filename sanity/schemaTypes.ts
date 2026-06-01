import { defineField, defineType } from "sanity";

export const profile = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "headline", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "about", type: "text" }),
    defineField({ name: "profileImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "resume", type: "file" }),
  ],
});

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "tech", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "cover", type: "image", options: { hotspot: true } }),
    defineField({ name: "githubUrl", type: "url" }),
    defineField({ name: "demoUrl", type: "url" }),
  ],
});

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "role", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "company", type: "string" }),
    defineField({ name: "duration", type: "string" }),
    defineField({ name: "description", type: "array", of: [{ type: "string" }] }),
  ],
});

export const skillGroup = defineType({
  name: "skillGroup",
  title: "Skill Group",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "items", type: "array", of: [{ type: "string" }] }),
  ],
});

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "video", type: "file" }),
  ],
});

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "github", type: "url" }),
    defineField({ name: "instagram", type: "url" }),
    defineField({ name: "linkedin", type: "url" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "showreel", type: "file" }),
    defineField({ name: "musicTrack", type: "file" }),
    defineField({ name: "musicCover", type: "image", options: { hotspot: true } }),
  ],
});

export const schemaTypes = [profile, project, experience, skillGroup, galleryItem, siteSettings];
