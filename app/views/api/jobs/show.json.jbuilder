json.job do
  json.partial! '/api/jobs/job.json.jbuilder', job: @job
end