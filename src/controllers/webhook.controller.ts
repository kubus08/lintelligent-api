import { Router } from "express";
import { prisma } from "../prisma";

export const webhookRouter = Router();

webhookRouter.post("/webhook", async (req, res) => {
    const signature = req.headers["x-hub-signature-256"] as string;
    const event = req.headers["x-github-event"];
    const payload = req.body;

    if (event === "installation") {
        const installationId = req.body.installation.id;
        const accountLogin = req.body.installation.account.login;
        const repos = payload.repositories;


        for (const repo of repos) {
            await prisma.repository.upsert({
                where: { repoId: repo.id },
                update: {},
                create: {
                    repoId: repo.id,
                    name: repo.name,
                    fullName: repo.full_name,
                    installationId,
                },
            });
        }

        return res.json({ ok: true });
    }
})