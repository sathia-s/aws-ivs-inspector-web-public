const header = {
  alg: "ES384",
  typ: "JWT",
};

const payload = {
  "aws:channel-arn": "arn:aws:ivs:us-west-2:740024244647:channel/ehxQJXkfewl6",
  "aws:access-control-allow-origin":
    "https://ivs.drqnz9fq1sbqo.amplifyapp.com/#/",
  "aws:strict-origin-enforcement": true,
  "aws:single-use-uuid": "1e760ed4-29c0-4ee3-987d-a5dc60734b58",
  "aws:viewer-id": "<viewer_id>",
  "aws:viewer-session-version": "<viewer_session_version>",
  exp: new Date.now() + 60 * 1000,
};

const signature = {};
