# Portfolio Asset Upload Guide

Keep every public file inside `public/assets/`. The website already has placeholder structure and CSS fallback visuals, so you can upload real files gradually without changing the layout first.

## Required Folder Structure

```text
public/
  assets/
    profile/
      profile.png
    resume/
      resume.pdf
    media/
      showreel/
        showreel.mp4
      music/
        current-track-cover.jpg
        current-track.mp3
    projects/
      sales-prediction-dashboard/
        cover.jpg
        screen-01.jpg
      heart-disease-prediction/
        cover.jpg
        screen-01.jpg
      customer-segmentation/
        cover.jpg
        screen-01.jpg
      portfolio-website/
        cover.jpg
        screen-01.jpg
      movie-recommendation/
        cover.jpg
        screen-01.jpg
      data-analytics-eda/
        cover.jpg
        screen-01.jpg
      future-projects/
    gallery/
      photography/
        photo-01.jpg
        photo-02.jpg
        photo-03.jpg
      videography/
        video-thumb-01.jpg
        video-01.mp4
        video-02.mp4
      editing/
        edit-01.jpg
        edit-02.jpg
      travel/
        travel-01.jpg
        travel-02.jpg
    documents/
      certificates/
```

## What To Upload Where

- Profile picture: `public/assets/profile/profile.png`
- Resume or CV: `public/assets/resume/resume.pdf`
- Showreel video: `public/assets/media/showreel/showreel.mp4`
- Music cover/audio: `public/assets/media/music/current-track-cover.jpg` and `public/assets/media/music/current-track.mp3`
- Project cover images: put each `cover.jpg` inside its matching project folder under `public/assets/projects/`
- Extra project screenshots: name them `screen-01.jpg`, `screen-02.jpg`, and so on in the same project folder
- Gallery photos: `public/assets/gallery/photography/`
- Gallery video files and thumbnails: `public/assets/gallery/videography/`
- Edited work/posters: `public/assets/gallery/editing/`
- Travel images: `public/assets/gallery/travel/`
- Certificates or documents: `public/assets/documents/certificates/`

## Links And Text

Update placeholder links and asset paths in:

```text
data/siteContent.ts
```

Current social and project links are intentionally `#` placeholders. Send me your GitHub, Instagram, LinkedIn, email, project links, and resume file when ready, and I can wire them into the existing structure.
