from django.db import models


class File(models.Model):
    file = models.FileField(blank=False, null=False)
