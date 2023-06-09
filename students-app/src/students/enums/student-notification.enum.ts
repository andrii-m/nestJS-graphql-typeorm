import { registerEnumType } from '@nestjs/graphql';

export enum StudentNotification {
  SUBMIT_SCHEDULE = 'Submit Schedule',
  SUBMIT_SECOND_SEMESTER_SCHEDULE = 'Submit 2nd Semester Schedule',
  RESUBMIT_SCHEDULE = 'Resubmit Schedule',
  RESUBMIT_SECOND_SEMESTER_SCHEDULE = 'Resubmit 2nd Semester Schedule',
  SUBMIT_ENROLLMENT_PACKET = 'Submit Enrollment Packet',
  RESUBMIT_ENROLLMENT_PACKET = 'Resubmit Enrollment Packet',
  SUBMIT_REIMBURSEMENT = 'Submit Reimbursement',
  RESUBMIT_REIMBURSEMENT = 'Resubmit Reimbursement',
  SUBMIT_DIRECT_ORDER = 'Submit Direct Order',
  RESUBMIT_DIRECT_ORDER = 'Resubmit Direct Order',
  TESTING_PREFERNCE = 'Testing Prefernce',
  MISSING_LEARNING_LOG = 'Missing Learning Log',
  RESUBMIT_LEARNING_LOG = 'Resubmit Learning Log',
  INTENT_TO_RE_ENROLL = 'Intent to Re-enroll',
  REQUEST_HOMEROOM_RESOURCES = 'Request Homeroom Resources',
  SUBMIT_WITHDRAW = 'Submit Withdraw',
}

registerEnumType(StudentNotification, {
  name: 'StudentNotificationEnum',
});
