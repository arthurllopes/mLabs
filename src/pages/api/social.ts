// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: {
    id: number,
    name: string,
    icon: string,
    status: string,
  }[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: [
      {
        "id": 1,
        "name": "Facebook",
        "icon": "facebook-f",
        "status": "disabled"
      },
      {
        "id": 2,
        "name": "Linkedin",
        "icon": "linkedin-in",
        "status": "enabled"
      },
      {
        "id": 3,
        "name": "Instagram",
        "icon": "instagram",
        "status": "enabled"
      },
      {
        "id": 4,
        "name": "Youtube",
        "icon": "youtube",
        "status": "disabled"
      },
      {
        "id": 5,
        "name": "Pinterest",
        "icon": "pinterest-p",
        "status": "disabled"
      },
      {
        "id": 6,
        "name": "Twitter",
        "icon": "twitter",
        "status": "disabled"
      }
    ]
  })
}
