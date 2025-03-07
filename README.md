# Project-Prometheus 🚀

A social platform focused on **quality content** and meaningful interactions, built to prioritize users over algorithms.

![NotFacebook Demo](https://via.placeholder.com/800x400.png?text=NotFacebook+Demo) <!-- Replace with actual screenshot -->

---

## 📖 Overview

NotFacebook is an open-source social media platform designed to foster genuine connections through high-quality content. Unlike traditional platforms, we emphasize **user control**, **transparent content moderation**, and **community-driven curation**.

### Goals
- 🎯 **Quality Over Quantity**: Prioritize meaningful posts over viral clickbait.
- 🛡️ **User Privacy**: Give users full control over their data.
- 🚀 **Open Core**: Build a community-driven platform with extensible features.

---

## ✨ Features

### Current
- **Content Feed**: Chronological posts with user voting.
- **Real-Time Chat**: Socket.io-powered messaging.
- **Responsive UI**: Built with Next.js and shadcn/ui.
- **Authentication**: Secure JWT-based login system.

### Planned
- 🔍 **Advanced Search**: Elasticsearch integration.
- 🧠 **Smart Recommendations**: ML-driven content suggestions.
- 💰 **Ethical Monetization**: Ad-free subscriptions or non-intrusive ads.

---

## 🛠️ Tech Stack

- **Frontend**: 
  - Next.js (App Router) + TypeScript
  - shadcn/ui + Tailwind CSS
- **Backend**: 
  - Nest.js + PostgreSQL
  - Redis (Caching & Real-Time)
- **Infrastructure**:
  - Monorepo (npm Workspaces)
  - Docker (Local Development)
- **Tools**: 
  - ESLint, Prettier, Husky

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- PostgreSQL
- Redis

### Installation

```bash
# Clone the repo
git clone https://github.com/YanMyoAungg/NotFacebook.git
cd NotFacebook

# Install dependencies (monorepo)
npm install

# Start the apps
npm run dev
