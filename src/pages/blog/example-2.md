---
layout: ../../layouts/BlogPost.astro
title: example 2
slug: example-2
date: 9-26-2022
description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur eaque, placeat ut distinctio facere ipsum quod dolorem et dolore consectetur.
image: "https://media.discordapp.net/attachments/448951116634390546/1002738729888268348/IMG_7184.jpg?width=507&height=676"
---

# Website

SRCStats is a web application designed for speedrunners, built in ASP.NET Core's MVC framework. It's meant as a direct companion to [Speedrun.com](https://www.speedrun.com), a website for speedrunning leaderboards and communities. Many of the functions in the site directly rely on Speedrun.com (SRC)'s API, such as getting information about a user or their runs, which imposes difficult rate limits to work with, requiring optimized API calls and a queue system for end users. To avoid leaving users in the dark, users receive real-time communication via [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr) to give constantly updated progress bars for the (many) requests necessary. Fetched information is stored in an Azure SQL database, which, along with server-side caching, delivers recent content quickly and efficiently.

# Webhooks

A common complaint about SRC's offerings ~among many other complaints~ is the lack of support for webhooks. Webhooks give users the ability to receive real-time notifications for events on websites, even when they aren't on the website. This begs the question, then:

> How do you implement your own custom webhook using their own API?

The solution to this question is the src-webhook service, comprised of [src-webhook-fetcher](https://github.com/SRCStats/src-webhook-fetcher) and [src-webhook-sender](https://github.com/SRCStats/src-webhook-sender). The fetcher is responsible for querying the 20 latest runs from Speedrun.com, finding the newest runs by comparing them to a collection of runs in a MongoDB database, storing the new runs in the database, and sending them to the webhook sender via an HTTP request. The sender is responsible for receiving those latest runs, comparing them to a database of Discord webhook URLs and their parameters (which are created by a page on the SRCStats website), and sending out a formatted Discord webhook to the relevant webhook URLs. Both of the functions are coded in Go and hosted as serverless functions in Azure Functions.

# Docker

Due to the nature of SRCStats and all of its dependencies, from databases to serverless functions to two individual runtimes, this was a great opportunity to implement Docker in the development stack. Every repository for SRCStats comes with a custom Dockerfile for deploying the project to a container. On every tagged release, a custom written Github Action will build and deploy the container. Each container is freely available on [the SRCStats container registry](https://github.com/orgs/SRCStats/packages). A custom Docker Compose file is also provided, automatically building and running all of SRCStats and its services with just a few commands.