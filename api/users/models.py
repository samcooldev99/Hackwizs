import csv
import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser, User
from django.db.models.signals import pre_save
from django.dispatch import receiver


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField('Email Address', unique=True)
    mobile_number = models.CharField('Mobile Number', max_length=13)

    # Business Details
    business_name = models.CharField('Business Name', blank=True, null=True, default=None, max_length=255)
    business_address = models.CharField('Business Address', blank=True, null=True, default=None, max_length=1024)
    gst_number = models.CharField('GST Number', blank=True, null=True, default=None, max_length=20)
    sales_history = models.FileField('Sales History', blank=True, null=True, default=None)
    score = models.CharField('Score', blank=True, null=True, default=None, max_length=10)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email


@receiver(pre_save, sender=User)
def compute_score(sender, instance=None, created=False, **kwargs):
    if instance.sales_history:
        with open(instance.sales_history) as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            total_spent = 0
            profit_loss = 0
            line_count = 0
            for row in csv_reader:
                if line_count != 0:
                    profit_loss += int(row[4])
                    total_spent += int(row[3])
                line_count += 1
            rating = (float(profit_loss) / total_spent) * 10
            print(f'Processed {rating} lines.')
