# Release Guide for NMEA Tracker Plugin

This document provides comprehensive instructions for building, testing, and releasing the NMEA Tracker plugin for Windy.com.

## 🏗️ Build System Overview

The project uses multiple build and release methods:

- **GitHub Actions Workflows** - Automated CI/CD
- **NPM Scripts** - Local development builds
- **Standalone Servers** - Local testing with HTTPS
- **Manual Distribution** - Direct file sharing

## 📋 Quick Reference

| Command | Purpose | Output |
|---------|---------|--------|
| `npm run build` | Local development build | `dist/plugin.js` |
| `npm run release` | Create release packages | `releases/` folder |
| `npm run dev` | Development with watch | Auto-rebuild on changes |
| `python serve-plugin.py` | HTTPS test server | [https://localhost:9999](https://localhost:9999) |

## 🚀 GitHub Actions Workflows

### Build and Release Workflow (`.github/workflows/build-release.yml`)

**Trigger:** Manual dispatch or push to main branch with version tag
**Purpose:** Create official releases with multiple package formats

#### Usage

1. **Manual Trigger:**

   - Go to GitHub Actions tab
   - Select "Build and Release"
   - Click "Run workflow"
   - Choose branch and options

2. **Automatic Trigger:**

   ```bash
   git tag v1.2.3
   git push origin v1.2.3
