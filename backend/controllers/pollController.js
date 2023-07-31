import asyncHandler from "express-async-handler";
import savePoll from "../model/savePoll.js";

export const createPollCtrl = asyncHandler(async (req, res) => {
  const poll = await savePoll.create({
    question: req.body.question?.question,
    pollid: req.body.question?.id,
    options: req.body.options,
    creator: req.userAuthId,
  });
  res.send({
    success: true,
    poll,
  });
});
export const editPollCtrl = asyncHandler(async (req, res) => {
  const x = req.body.question?.question;
  const y = req.body.options;
  const k = req.body.pollid;
  console.log(x, y);

  savePoll
    .findOneAndUpdate({ pollid: k }, { question: x, options: y })
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
});
export const linksCtrl = asyncHandler(async (req, res) => {
  const x = req.body.id;
  //console.log(x);
  savePoll
    .findOne({ pollid: x })
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
});
export const submitResponseCtrl = asyncHandler(async (req, res) => {
  console.log("api working", req.body.id, req.body.count, req.body.pollid);
  const pollid = req.body.pollid;
  savePoll
    .updateOne(
      { pollid: pollid, "options.id": req.body.id },
      { $set: { "options.$.count": req.body.count } }
    )
    .then(() => {
      console.log("Count updated");
    })
    .catch((err) => {
      console.log(err);
    });
});
export const deletePollCtrl = asyncHandler(async (req, res) => {
  //console.log(req.body.key);
  const deletePoll = await savePoll.findByIdAndDelete(req.body.key);
  res.send({
    message: "poll deleeted",
  });
});
export const getPollCtrl = asyncHandler(async (req, res) => {
  const x = req.params.id;
  console.log("response made" + x);
  savePoll
    .findOne({ pollid: x })
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
});
